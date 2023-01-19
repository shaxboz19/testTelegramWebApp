export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
        Authorization: 'Bearer eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjY1NDE2OTc2LCJqdGkiOiJjYTk0MDhmZC02MWJhLTRmNDktODIwYS0yYWUzYzMxOWVkNjYiLCJ1c2VyX3V1aWQiOiJGSEFFVUJURzNVU1dXQTJXIn0.ZFQIO-IFXxsWNE9lv6V9M-aqh0BDMtTE2yeyk544VJSxt0LE9NuDyZcibdb2-jK-QbyhrFGYjQ16TzLKZac6Mw'
      }
    }
  })

  // Set baseURL to something different
  api.setBaseURL('https://api.calendly.com')

  // Inject to context as $api
  inject('api', api)
}
