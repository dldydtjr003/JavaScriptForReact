import { useState } from 'react'
import '../css/List.css'
const List=({todos,onDelete,onUpdate})=>{

  const[search,setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.name.toLowerCase().includes(search.toLowerCase())
  );

  return <>
  <div className="search">
    <input
        type='text'
        value={search}
        onChange={onChangeSearch}
        placeholder="검색할 이름을 입력하세요"
      />
  </div>
    <div className="subject">
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>국어</th>
            <th>영어</th>
            <th>수학</th>
            <th>총점</th>
            <th>평균</th>
            <th>Date</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map((todo)=>{
          return(
            <tr key={todo.name}>
              <td>{todo.name}</td>
              <td>{todo.kor}</td>
              <td>{todo.eng}</td>
              <td>{todo.math}</td>
              <td>{todo.total}</td>
              <td>{todo.avg}</td>
              <td>{new Date(todo.date).toLocaleDateString()}</td>
              <td>
  <button className="edit_btn" onClick={()=>{onUpdate(todo.name)}}>수정</button>
  <button className="delete_btn" onClick={() => onDelete(todo.name)}>삭제</button>
</td>
            </tr>
          )})}
        </tbody>
      </table>
    </div>
    
  </>
  
}
export default List;