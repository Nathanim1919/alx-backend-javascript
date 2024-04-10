import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([uploadPhoto(filename), signUpUser(firstName, lastName)]).then((re) => {
    re.map((result) => ({
      status: result.status,
      value: result.value,
    }));
  });
}
