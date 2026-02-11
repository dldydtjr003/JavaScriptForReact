import { useState } from 'react'
import '../css/List.css'
const List=({todos,onDelete,onUpdate})=>{

  const[search,setSearch] = useState('');
  const[edit,setEdit] = useState(null);

  const edite=(name)=>{
    setEdit(name);
  }
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
            if (todo.name === edit) {
                return (
                  <tr key={todo.name}>
                    <td>{todo.name}</td>
                    <td><input type="number" id="e-kor" defaultValue={todo.kor} /></td>
                    <td><input type="number" id="e-eng" defaultValue={todo.eng} /></td>
                    <td><input type="number" id="e-math" defaultValue={todo.math} /></td>
                    <td>
                      <button className="edit_btn" onClick={() => {
                        const k = document.getElementById('e-kor').value;
                        const e = document.getElementById('e-eng').value;
                        const m = document.getElementById('e-math').value;
                        onUpdate(todo.name, k, e, m); 
                        setEdit(null); 
                      }}>등록</button>
                      <button className="delete_btn" onClick={() => setEdit(null)}>취소</button>
                    </td>
                  </tr>
                );
              }
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
  <button className="edit_btn" onClick={()=>{edite(todo.name)}}>수정</button>
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