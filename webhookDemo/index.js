const express = require('express')
const app = express()
const dfff = require('dialogflow-fulfillment')

app.get('/', (req, res) => {
  res.send('we are live')
})

app.post('/', express.json(), (req, res) => {
  const agent = new dfff.WebhookClient({
    request: req,
    response: res
  })

  function demo (agent) {
    agent.add('sending response from webhook server as v1.1.11.1')
  }

  function customPayloadDemo (agent) {
    // var payloadData = {
    //   'richContent': [
    //     [
    //       {
    //         'type': 'accordion',
    //         'title': 'Accordion title',
    //         'subtitle': 'Accordion subtitle',
    //         'image': {
    //           'src': {
    //             'rawUrl': 'https://example.com/images/logo.png'
    //           }
    //         },
    //         'text': 'Accordion text'
    //       }
    //     ]
    //   ]
    // }

    // agent.add(new dfff.Payload(agent.UNSPECIFIED, payloadData, {sendAsMessage:true, rawPayload: true}))

    agent.add("its a response from custom payload data side...")
  }

  var intentMap = new Map()
  intentMap.set('WebhookDemo', demo)
  intentMap.set("customPayloadDemo", customPayloadDemo)

  agent.handleRequest(intentMap)
})

app.listen(3333, () => {
  console.log('server is live at port 3333')
})
