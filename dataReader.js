const jsonURL = './data.json';

const reactionRank = document.getElementById('reaction-rank');
const memoryRank = document.getElementById('memory-rank');
const verbalRank = document.getElementById('verbal-rank');
const visualRank = document.getElementById('visual-rank');
const totalRank = document.getElementById('result-number');
const resultStatus = document.getElementById('result-status');
const resultDescription = document.getElementById('result-description');

fetch(jsonURL)
    .then(response => response.json())
    .then(data => {
        let sum = 0;
        data.forEach(json => {
            switch (json.category) {
                case 'Reaction':
                    reactionRank.innerHTML = `${json.score}`;
                    break;
                case 'Memory':
                    memoryRank.innerHTML = `${json.score}`;
                    break;
                case 'Verbal':
                    verbalRank.innerHTML = `${json.score}`;
                    break;
                case 'Visual':
                    visualRank.innerHTML = `${json.score}`;
                    break;
                default:
                    break;
            }
            sum += Math.floor(json.score / 4);
        });
        totalRank.innerHTML = sum;
        resultDescription.innerHTML = `Your performance exceeded that of ${sum}% of people who took the test here!`;
        if (sum < 10) {
            resultStatus.innerHTML = 'Practice More';
        } else if (sum < 70) {
            resultStatus.innerHTML = 'Good';
        } else if (sum < 100) {
            resultStatus.innerHTML = 'Great';
        } else {
            resultStatus.innerHTML = 'Jackpot!';
        }
    })
    .catch(error => {
        alert('Error:', error);
    });
