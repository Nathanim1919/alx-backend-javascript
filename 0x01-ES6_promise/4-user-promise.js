export default function signUpUser(firstName, lastName) {
  return new Promise()
    .then(() => (
      {
        "firstName": firstName,
        "lastName": lastName,
      }
    ));
}
