import React ,{useState}from 'react'
import {  useParams,useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {postComment} from '../../actions/question'

const Comment = () => {

    const User = useSelector((state) => (state.currentUserReducer))
    const { id } = useParams()
    const dispatch = useDispatch()
    const Navigate = useNavigate()
     
    const [comment, setComment]= useState('');
    const handleComment = (e) =>{
        e.preventDefault()
        if(User === null){
            alert('Login or Signup to answer a question')
            Navigate('/Auth')
        }else{
            if(comment === ''){
                alert('Enter an answer before submitting')
            } else{
                
                dispatch(postComment({ id, userId:id, commentBody: comment, userCommented: User.result.name }))
            }
        }
    }
  return (
    <div className='commentbox'>
    {
        User && (
            <div>
                <form onSubmit={ handleComment}>
                  <label htmlFor="comment">comment:
                    <input type="text" id="comment" name="comment" onChange={(e) => {setComment(e.target.value)}}/>
                  </label>
                 <input type="Submit"  style={{ color:'white', fontSize:'13px', padding:'5px 5px',backgroundColor: '#009dff',borderRadius:'4px',marginLeft:'2px',cursor:'pointer',transition:'0.2s'}} value='post'/>

                </form>
                
            </div>
            
        )
    }   
 </div>
  )
}

export default Comment