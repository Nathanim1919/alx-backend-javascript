export default function signUpUser(firstName, lastName) {
  return new Promise()
    .then((data) => (
      {
        firstName: data.firstName,
        lastName: data.lastName,
      }
    ));
}
