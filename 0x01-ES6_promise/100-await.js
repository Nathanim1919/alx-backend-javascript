import { uploadPhoto, createUser } from './utils';
/* eslint-disable */
export default async function asyncUploadUser() {
  try {
    let photo = await uploadPhoto();
    let user = await createUser();
    return { photo, user };
  } catch (err) {
    return { photo: null, user: null };
  }
}
/* eslint-enable */
