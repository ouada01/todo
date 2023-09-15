import deleteicon from '../assets/delete.svg';
import check from '../assets/checked.svg';
import checkicon from '../assets/check.svg';

export function Task({ task, onDelete, onComplete }) {
  return (
    <div className="task">
      <button className='h-full rounded-lg p-4' onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <img className='h-4 w-4' src={check} /> : <img className='h-4 w-4' src={checkicon} /> }
      </button>

      <p className={task.isCompleted ? "textCompleted" : ""}>
        {task.title}
      </p>

      <button className='px-5' onClick={() => onDelete(task.id)}>
      <img className='h-4 w-4' src={deleteicon} />
      </button>
    </div>
  )
}