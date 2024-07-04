import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from './components/Post/Post';

import './styles/global.scss';
import styles from './styles/App.module.scss';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'}, 
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'}, 
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'}, 
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'}, 
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-05-10 20:00:00')
  },
];


export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post)=> {
            return <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt}/>
          })}
        </main>
      </div>
    </div>
  )
}
