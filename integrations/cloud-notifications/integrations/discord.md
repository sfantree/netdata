<!--startmeta
custom_edit_url: "https://github.com/netdata/netdata/edit/master/integrations/cloud-notifications/integrations/discord.md"
meta_yaml: "https://github.com/netdata/netdata/edit/master/integrations/cloud-notifications/metadata.yaml"
sidebar_label: "Discord"
learn_status: "Published"
learn_rel_path: "Alerts & Notifications/Notifications/Centralized Cloud Notifications"
message: "DO NOT EDIT THIS FILE DIRECTLY, IT IS GENERATED BY THE NOTIFICATION'S metadata.yaml FILE"
endmeta-->

# Discord


<img src="https://netdata.cloud/img/discord.png" width="150"/>


From the Netdata Cloud UI, you can manage your space's notification settings and enable the configuration to deliver notifications on Discord.


<img src="https://img.shields.io/badge/maintained%20by-Netdata-%2300ab44" />

## Setup

### Prerequisites
- A Netdata Cloud account
- Access to the Netdata Space as an **administrator**
- You need to have a Discord server able to receive webhooks integrations.

### Discord Server Configuration
Steps to configure your Discord server to receive [webhook notifications](https://support.discord.com/hc/en-us/articles/228383668) from Netdata:
1. Go to `Server Settings` --> `Integrations`
2. **Create Webhook** or **View Webhooks** if you already have some defined
3. Specify the **Name** and **Channel** on your new webhook
4. Use Webhook URL to add your notification configuration on Netdata UI

### Netdata Configuration Steps
1. Click on the **Space settings** cog (located above your profile icon)
2. Click on the **Notification** tab
3. Click on the **+ Add configuration** button (near the top-right corner of your screen)
4. On the **Discord** card click on **+ Add**
5. A modal will be presented to you to enter the required details to enable the configuration:
  * **Notification settings** are Netdata specific settings
    - Configuration name - you can optionally provide a name for your configuration you can easily refer to it
    - Rooms - by specifying a list of Rooms you are select to which nodes or areas of your infrastructure you want to be notified using this configuration
    - Notification - you specify which notifications you want to be notified using this configuration: All Alerts and unreachable, All Alerts, Critical only
  * **Integration configuration** are the specific notification integration required settings, which vary by notification method. For Discord:
    - Define the type channel you want to send notifications to: **Text channel** or **Forum channel**
    - Webhook URL - URL provided on Discord for the channel you want to receive your notifications.
    - Thread name - if the Discord channel is a **Forum channel** you will need to provide the thread name as well

