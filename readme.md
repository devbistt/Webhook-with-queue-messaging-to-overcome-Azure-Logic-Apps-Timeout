# Webhook with queue messaging to overcome Azure Logic Apps Timeout

Azure logic apps have a request timeout limit as below , this could cause http request to timeout.

| Name             | Multi-tenant    | Single-tenant               | Integration service environment |
| ---------------- | --------------- | --------------------------- | ------------------------------- |
| Outbound request | 120 sec (2 min) | 235 sec (3.9 min) (Default) | 240 sec (4 min)                 |
| Inbound request  | 120 sec (2 min) | 235 sec (3.9 min) (Default) | 240 sec (4 min)                 |

## Installation

Use npm to install required libraries

```bash
pip install foobar
```

## Usage

```

```
