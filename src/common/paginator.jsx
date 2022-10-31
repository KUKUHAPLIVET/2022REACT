import s from "./paginator.module.css"

const Paginator = (props) => {


  let pagesCount = Math.ceil(props.totalUsers / props.pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }





  return(
      <div>
        	  {pages.map(p => {
        return <span className={props.pageNumber === p && s.activePage}
          onClick={() => { props.onPageChanged(p) }}>
          {p}
        </span>
      }
      )}

      </div>

  )
}

export default Paginator
