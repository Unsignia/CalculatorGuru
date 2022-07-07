export default async function search_item(name) {
  let url =
    "https://us-east-1.aws.data.mongodb-api.com/app/application-0-jonbw/endpoint/get/img_link_webhook";

  const b = await fetch(url + "?arg=" + name)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  return b;
}
