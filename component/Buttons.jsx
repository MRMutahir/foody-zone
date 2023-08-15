import React from 'react'
import { Link, Router, Routes } from 'react-router-dom'
import MainInner from './MainInner'

function Buttons() {
  return (
<>
<div className="Buttons">
<Link to={'/ALL'}><button>All</button></Link>
<Link to={'/Breakfast'}><button>Breakfast</button> </Link>
<Link to={'/Lunch'}><button>Lunch</button></Link>

<button>Dinner</button>
</div>
</>
  )
}

export default Buttons