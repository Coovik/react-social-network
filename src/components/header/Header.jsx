import cHeader from './Header.module.css'

function Header() {
   return (
      <div className={cHeader.header}>
         <div className={cHeader.logo}>
            <img src="https://cdn-icons-png.flaticon.com/512/7269/7269877.png" alt="" /></div>
      </div>
   )
}
export default Header