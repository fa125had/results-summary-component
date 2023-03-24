const jsonURL = './data.json';

const reactionRank = document.getElementById('reaction-rank');
const memoryRank = document.getElementById('memory-rank');
const verbalRank = document.getElementById('verbal-rank');
const visualRank = document.getElementById('visual-rank');
const totalRank = document.getElementById('result-number');
const resultStatus = document.getElementById('result-status');



fetch(jsonURL)
    .then(response => response.json())
    .then(data => {
        let sum = 0;
        data.forEach(json => {
            if (json.category == 'Reaction') {
                reactionRank.innerHTML = ` ${json.score}`;
            } else if (json.category == 'Memory') {
                memoryRank.innerHTML = ` ${json.score}`;
            } else if (json.category == 'Verbal') {
                verbalRank.innerHTML = ` ${json.score}`;
            } else if (json.category == 'Visual') {
                visualRank.innerHTML = ` ${json.score}`;
            };
            sum += Math.floor(json.score / 4);
            totalRank.innerHTML = sum;
            if (sum < 10) {
                resultStatus.innerHTML = 'Failed';
            } else if (sum > 10 && sum < 70) {
                resultStatus.innerHTML = 'Good';
            } else if (sum > 69 && sum < 100) {
                resultStatus.innerHTML = 'Great';
            }
            else if (sum === 100) {
                resultStatus.innerHTML = 'Jackpot!';
            }
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

