import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import New from './components/New'
import Diary from './components/Diary'
import Edit from './components/Edit'
import NotFound from './components/NotFound'

function App() {

  const nav = useNavigate();
  const onClickGoPage = (e)=>{
    nav(`/${e.target.value}`)
  }
  return (
    <>
    {/* 여기에 적은 내용은 모든 페이지에 공통 사용 */}
    <h2><Link to={"/"}>Home</Link> || <Link to={"new"}>New</Link> || <Link to={"diary"}>Diary</Link> || <Link to={"edit"}>Edit</Link></h2>
    <h2><a href="/">Home</a> || <a href="/new">New</a> || <a href="/diary">Diary</a> || <a href="/edit">Edit</a></h2>
    <button onClick={onClickGoPage} value="">Home</button>
    <button onClick={onClickGoPage} value="new">New</button>
    <button onClick={onClickGoPage} value="diary">Diary</button>
    <button onClick={onClickGoPage} value="edit">Edit</button>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/diary' element={<Diary/>}/>
        <Route path='/edit' element={<Edit/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
    </>
  )
}

export default App
