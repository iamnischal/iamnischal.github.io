from pusher_push_notifications import PushNotifications

beams_client = PushNotifications(
    instance_id='e4b1c071-e6fe-430c-a313-f32c66012cfa',
    secret_key='2C317D84D0B06379BB12B9943ECEAEEA8ABF3D86798736D7568A3E081BFD1B94',
)

response = beams_client.publish_to_interests(
  interests=['hello'],
  publish_body={
    'web': {
      'notification': {
        'title': 'Hello',
        'body': 'Hello, world!',
        'deep_link': 'https://www.pusher.com',
      },
    },
  },
)

print(response['publishId'])