import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    let photo = await uploadPhoto();
    let user = await createUser();
    return { photo, user };
  } catch (err) {
    return { photo: null, user: null };
  }
}
