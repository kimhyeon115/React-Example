import React from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'https://picsum.photos/64/64?random=1',
    'name': '티모',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://picsum.photos/64/64?random=2',
    'name': '케이틀린',
    'birthday': '970412',
    'gender': '여자',
    'job': '원딜러'
  },
  {
    'id': 3,
    'image': 'https://picsum.photos/64/64?random=3',
    'name': '바이',
    'birthday': '950521',
    'gender': '여자',
    'job': '정글러'
  }
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
          );
        })
      }
    </div>
  );
}

export default App;
