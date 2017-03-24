
const data = [
  {
    name: 'book one',
    done: true
  },
  {
    name: 'book two',
    done: false
  },
  {
    name: 'book three',
    done: true
  },
  {
    name: 'book four',
    done: false
  },
  {
    name: 'book five',
    done: true
  },
  {
    name: 'book six',
    done: false
  },
  {
    name: 'book seven',
    done: true
  },
];

const getData = () => {
  return new Promise((resolve,reject) => {
    resolve(data)
  }) 
}

export default getData;