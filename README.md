# FogbugzToSlack
Slack integration (via webhook) for receiving FogBugz case updates. Can run on AWS Lambda.

<img width="486" alt="screen shot 2015-10-29 at 05 10 03" src="https://cloud.githubusercontent.com/assets/1028741/10810702/80687096-7dfb-11e5-9af9-587835d28f32.png">

### Usage
1. Create webhook from Slack and paste the url into `variables.js`
1. `npm install` to fetch dependencies
1. `zip -r bot.zip .` to package the bot for use on AWS Lambda
1. Set the handler to `main.handler` and configure an API Gateway
1. Create a POST webhook on FogBugz and point it at your new endpoint

### Troubleshooting
FogBugz was throwing "The requested name is valid, but no data of the requested type was found", which appeared to be a C# DNS error. Setting a custom domain name resolved this but involves setting up SSL certs on AWS.

## License

    Copyright 2015 James Edwards-Jones

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
