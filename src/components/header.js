import React from 'react'

const Header = () => <div className='header' style={{ height: '7%' }}>
  <div className='main-text'>Map of Thrones</div>
  <div className='poweredby-text' onClick={_ => open('https://github.com/rajatsharma305/pangaea')}>Powered by Pangaea</div>
</div>

export default Header
