import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Pagenation.css'



const PaginationConfig = ({SetPage, numberOfPages}) => {

    const handleChangePage = (page) => {
        SetPage(page);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    

    return (
        <div className='Pagenation'>
            <Stack>
                <Pagination  size="large" count = {numberOfPages} color="secondary" onChange={(e) => {
                    handleChangePage(e.target.textContent)
                }}/>
            </Stack>
        </div>
        
    )
}

export default PaginationConfig;