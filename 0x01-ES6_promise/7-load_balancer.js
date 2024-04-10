export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.resolve(chinaDownload, USDownload)
    .then((value) => {
      console.log(value);
    });
}
