import React from 'react'
import { useLocation} from 'react-router-dom'
import Card from '../components/Card';

const Property = () => {
  const searchParams = useLocation();
  const property = searchParams.state.id;

  return (
    <div>
    <Card property={property}/>
    </div>
  )
}

export default Property