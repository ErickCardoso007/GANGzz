import './index.css'

export const Content = () => {
    return (
        <>
        <div className='container-content'>
        <div>
          <img src="https://i.pinimg.com/564x/ef/82/23/ef8223293a1c485c55620be8caeb6a84.jpg" alt="Erro" width={400} height={500} />
        </div>
        <div className='container-text'>
          <div>
            <h1>Hi!</h1>
            <h1>I am Avery Davis</h1>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt finibus diam. Nulla ornare mollis risus sed mattis. Nunc at mauris ut velit sollicitudin dignissim ac eget turpis. Duis quis laoreet tellus, eu condimentum mauris. Quisque sed imperdiet lorem. Fusce euismod risus eu tortor dapibus vehicula. Integer rhoncus lorem nec lobortis sagittis. Aenean elementum et lorem in suscipit. Suspendisse at diam eget quam laoreet viverra.</p>
          </div>
          <div className='btn-view-work'>
            <button>View Work</button>
          </div>
          
        </div>
      </div>
        </>
    )
}