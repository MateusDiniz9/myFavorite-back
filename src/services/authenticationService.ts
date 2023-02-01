import userRepository from "../repository/userRepository";

async function loginWithOauth(OauthToken: string, dataUser: UserParams) {
  const newUser = await userRepository.findByEmail(dataUser.email);
  if (!newUser) {
    const oauthUser = await userRepository.create({
      email: dataUser.email,
      password: dataUser.uid,
      phoneNumber: dataUser.phoneNumber,
      photoURL: dataUser.photoURL,
      providerId: dataUser.providerId,
    });
    const newSession = await createSession(oauthUser.id, OauthToken);

    return {
      userId: oauthUser.id,
      token: newSession.token,
      userPhoto: oauthUser.photoURL,
    };
  }
  const newSession = await createSession(newUser.id, OauthToken);
  return {
    userId: newUser.id,
    token: newSession.token,
    userPhoto: newUser.photoURL,
  };
}

async function createSession(userId: number, OauthToken: string) {
  const session = await userRepository.createSession(OauthToken, userId);
  return session;
}

export type UserParams = {
  displayName: string;
  email: string;
  phoneNumber: string;
  photoURL: string;
  providerId: string;
  uid: string;
};

const authenticationService = { loginWithOauth };
export default authenticationService;
