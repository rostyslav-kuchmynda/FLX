function userCard (someIndex) {
    let transferTax = 0.005;

    let options = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: someIndex
    };

    const addHistoryLogs = function(operationType, credits) {
        let time = new Date().toLocaleString('en-GB');

        let log = {
            operationType,
            credits,
            operationTime: time
        };
        options.historyLogs.push(log);
    };

    function getCardOptions () {
        return options;
    }
    
    function putCredits (credits) {
        options.balance += credits;
        addHistoryLogs('Received credits', credits);
    }

    function takeCredits (credits) {
        if (credits <= options.balance && credits <= options.transactionLimit) {
            options.balance -= credits;
            addHistoryLogs('Withdrawal of credits', credits);
        } else {
            console.error('Not enough money or your transaction limit is low.');
        }
    }

    function setTransactionLimit (credits) {
        options.transactionLimit = credits;
        addHistoryLogs('Transaction limit change', credits);
    }

    function transferCredits (credits, card) {
        let creditPlusTax = credits * transferTax + credits;
        if (creditPlusTax > options.balance && creditPlusTax > options.transactionLimit) {
            console.error('Not enough money or your transaction limit is low.');
        } else {
            takeCredits(creditPlusTax);
            card.putCredits(credits);
        }
    }

    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    };
}

function UserAccount(name) {
    this.name = name,
    this.cards = [],
    this.addCard = function() {
      let maxCards = 3;
        if (this.cards.length < maxCards) {
        this.cards.push(userCard(this.cards.length + 1));
      }
    };
    this.getCardByKey = function (num) {
      return this.cards[num - 1];
    };
}