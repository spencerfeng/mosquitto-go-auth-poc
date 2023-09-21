const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://localhost:1880', {
  username: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJsb3JhLWFwcC1zZXJ2ZXIiLCJhdWQiOiJsb3JhLWFwcC1zZXJ2ZXIiLCJuYmYiOjE5OTk2NTMzNTgsImV4cCI6MTk5OTY1MzM1OCwic3ViIjoiY29ycmVjdCJ9.dpWhy7NOokDzxuYiB7MsKurUg8vfsMg2FQlxe2J-cMc",
  password: "any"
})

client.on('connect', () => {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})

client.on('message', (topic, message) => {
  // message is Buffer
  console.log(message.toString())
  client.end()
})

client.on('error', (error) => {
  console.log('mqtt error', error)
})