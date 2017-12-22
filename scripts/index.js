function parseChatHistoryFile(historyFile, totalSize) {
    return new Promise(function (resolve, reject) {
        Papa.parse(historyFile, {
            header: true,
            quoteChar: '"',
            complete: function (results, file) {
                // check chat history format is valid, i.e. headers:
                // [Session, Time, Speaker, Sentence, Liked, Changed]
                if (compareArrays(results.meta.fields,
                    ['Session', 'Time', 'Speaker', 'Sentence', 'Liked', 'Changed'])) {
                    parseHistory(results.data);
                    resolve(results.data);
                }
            }
        });
    });

    // Parse chat history data for ease of use later on:
    // - convert string values to numbers, for some fields
    // - add Unix timestamp key-value for datetime processing
    // - format 'Time' field to readable datetime string
    function parseHistory(chatHistory) {
        for (let i = 0; i < chatHistory.length; i++) {
            const history = chatHistory[i];
            // remove invalid history record
            if (!history['Speaker']) return chatHistory.splice(i, 1);
            // strings to numbers for 'Session', 'Liked', 'Changed' fields
            history['Session'] = Number(history['Session']);
            history['Liked'] = Number(history['Liked']);
            history['Changed'] = Number(history['Changed']);
            // (date)time strings to Moment objects
            const timeMoment = moment(history['Time']);
            history['Timestamp'] = timeMoment.unix();
            // format 'Time' field to readable datetime string
            history['Time'] = timeMoment.format("YYYY-M-D HH:mm:ss");
        }
    }

    // Utility: compare if elements of two arrays are equal
    // use case: compare header fields of CSV data to given format
    function compareArrays(arr1, arr2) {
        if (!arr1 || !arr2 || arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }
}