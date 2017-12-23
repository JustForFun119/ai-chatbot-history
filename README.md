# Interactive Chat History for COMP4431 Chatbot

Interactive chat message history view of chatbot project (course project for COMP4431 Artificial Intelligence).

## Purpose

- View and interact with chatbot chat messages/history.
- Import chatbot history data by uploading history CSV file.
- Try out Vue.js framework on a small, static webpage!

## Usage

1. Visit [app website](https://justforfun119.github.io/ai-chatbot-history/index.html)
2. Upload chatbot history *history.csv* (see *history_example.csv* in repo for example data)
3. Interact with chat message history, filtered by:
    - Date: datepicker shows days of available chat messages
    - Session: list of sessions recorded during chatbot   project (date/time range, duration, and no. of messages)
    - Speaker: select messages sent by each speaker only

## Libraries Used
- [Vue.js](https://vuejs.org) - JavaScript framework for building UI views
- [VueMaterial](https://vuematerial.io) - Material Design for Vue.js
- [PapaParse](https://papaparse.com) - JavaScript library for CSV parsing
- [V-Calendar](https://vcalendar.netlify.com/) - Calendar/datepicker plugin for Vue.js
- [Moment.js](https://momentjs.com/) - JavaScript date/time library
