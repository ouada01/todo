import todoLogo from '../assets/todoLogo.svg';
import add from '../assets/add.svg';
import { useState } from 'react';

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState('');
  const [error, seterorr] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if(title==""){
      seterorr(true)
    }else{
      handleAddTask(title);
      setTitle('');
    }

  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <>
    <header className=' w-full h-64 relative bg-blue2/30 flex flex-col items-center justify-center'>
      <img className='w-32 h-32 object-contain' src={todoLogo} />

      <form className='flex items-center gap-2 justify-center  absolute -bottom-5 w-11/12 md:w-[32rem]' onSubmit={handleSubmit} >
        <input placeholder="Add a new task" type="text" onChange={onChangeTitle} value={title} />
        <button className='flex items-center h-12 w-28 md:w-32 rounded-lg bg-blue2 justify-center text-white transform hover:scale-[1.01] transition-all gap-2'>Create <img className='h-4 w-4' src={add} /></button>
      </form>
    </header>
    
    </>
  )
}