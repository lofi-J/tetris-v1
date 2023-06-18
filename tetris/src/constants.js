export const TETROMINOS =
{
    0: { shape: [[0]], color: '0, 0, 0'},
    I: {
        shape: [
            ['I', 'I', 'I', 'I'],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        color: '80, 227, 230',
    },
    J: {
        shape: [
            [0,   'J', 0, 0],
            [0,   'J', 0, 0],
            ['J', 'J', 0, 0]
        ],
        color: '36, 95, 223',
    },
    L: {
        shape: [
            [0, 'L', 0,  0],
            [0, 'L', 0,  0],
            [0, 'L', 'L', 0],
            [0, 0, 0, 0],
        ],
        color: '223, 173, 36',
    },
    O: {
        shape: [
            [0, 0, 0, 0],
            [0, 'O', 'O', 0],
            [0, 'O', 'O', 0],
            [0, 0, 0, 0],
        ],
        color: '223, 217, 36',
    },
    S: {
        shape: [
            [0, 0, 0, 0],
            [0, 'S', 'S', 0],
            ['S', 'S', 0, 0],
            [0, 0, 0, 0]
        ],
        color: '48, 211, 56',
    },
    T: {
        shape: [
            [0, 'T', 0, 0],
            ['T','T','T', 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        color: '132, 61, 198',
    },
    Z: {
        shape: [
            [0, 0, 0, 0],
            ['Z', 'Z', 0, 0],
            [0,'Z','Z', 0],
            [0, 0, 0, 0]
        ],
        color: '227, 78, 78',
    }
}


class Queue {
    constructor() {
        this.items = JSON.parse(JSON.stringify(Object.keys(TETROMINOS).filter(key => key !== '0')));
    }

    shuffle(array) {
        const length = array.length;
        for (let i = length - 1; i > 0; i--) {
          const randomIndex = Math.floor(Math.random() * (i + 1));
          [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
        }
        return array;
      }



    isEmpty() {
        return this.items.length === 0;
    }
    init() {
        const temp = JSON.parse(JSON.stringify(Object.keys(TETROMINOS).filter(key => key !== '0')));
        this.shuffle(temp);
        this.items = temp;
    }
    dequeue() {
        if(this.isEmpty()) {
            this.init();
            return TETROMINOS[this.items.pop()];
        } else {
            return TETROMINOS[this.items.pop()];
        }
    }
}

export const queue = new Queue();

export const randomTetromino = () => {
    return queue.dequeue();
}