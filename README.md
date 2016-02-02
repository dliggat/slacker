# Slacker

## Edit Message

```json
// default.json, or $NODE_ENV.json.
{
  "slack": {
    "message": "hello world"
  }
}
```

## Pick a Slack Configuration

Set `NODE_ENV` for a given `$NODE_ENV.json`.

## Send Message

    NODE_ENV=liggat-general grunt slack_post  # Will use the message configured in the JSON hierarchy

    NODE_ENV=liggat-general SLACK_MESSAGE=foobar grunt slack_post  # Will use SLACK_MESSAGE

## JSON Hierarchy
In ascending order of precedence:

1. `default.json`
2. `$NODE_ENV.json`
3. `custom-environment-variables.json` (i.e. the variables specified therein)
