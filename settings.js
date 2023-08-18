import './Settings.scss'

const Settings = () => {
  return (
    <div className='cont'>
      <div className='Reset'>
        <button>RESET PASSWORD</button>

      </div>

      <div className='box'> 
      <div className='banner'>
       <div class="rectangle"></div>
       <div className='profile'>
       <img class="profileimage"  src="https://via.placeholder.com/150x150" />
       <div className='profiletxt'>
        <h1 className='profilename'>Profile</h1>
        <h2 className='profilesubtext'>Update your photo and personal details</h2>
        </div>
       </div>
       <div className='profilebtns'>
         <div className='cnclbtn'>
          <button>Cancel</button>

         </div>
         <div className='sbmtbtn'>
         <button>Save</button>

         </div>

       </div>

      </div>

      <div className='details'>
        <div className='row2'>
          <div className='label1'>
            User ID:
            
          </div>
          <div className='input1'>
            <input/>

          </div>
          <div className='label2'>
            User Name:

          </div>
          <div className='input2'>

            <input/>

          </div>

        </div>
        <div className='row1'>

         <div className='label3'>
            Name:
          </div>
          <div className='input3'>
            <input/>
          </div>

        </div>
        <div className='row2'>
        <div className='label1'>
            Email:
            
          </div>
          <div className='input1'>
            <input/>

          </div>
          <div className='label2'>
            Contact.No:

          </div>
          <div className='input2'>

            <input/>

          </div>

        </div>
        <div className='row2'>
          <div className='label1'>
            Gender:
            
          </div>
          <div className='input1'>
            <input/>

          </div>
          <div className='label2'>
            Age:

          </div>
          <div className='ageinput'>

            <input/>

          </div>

        </div>
        <div className='row1'>

         <div className='label3'>
            Experience:
          </div>
          <div className='input3'>
            <input/>
          </div>

        </div>
        <div className='rowlarge'>
        <div className='label4'>
            Your bio:
          </div>
          <div className='inputlarge'>
            <textarea/>
          </div>

        </div>
        
      </div>

      </div>


      <div className='logout'>
        <button>Logout</button>

      </div>

     
    </div>
    
  );
};

export default Settings;
