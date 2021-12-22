import { useMediaQuery } from 'react-responsive'

function IsMobileMediaQuery() {
    return useMediaQuery({
        query: "(max-width: 1212px)"
    });
}
export default IsMobileMediaQuery;