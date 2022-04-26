import React, { useEffect, useState } from 'react'
import { Container, NavItem, Card, Button, Row, Col, link, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiArtes from '../../services/apiArtes'


const ArtesUm = () => {

    const [artes, setArtes] = useState([])


    useEffect(() => {
       
       apiArtes.get('artworks/?language=pt-BR').then(resultado =>{
        
        setArtes(resultado.data.results) 
       })

      
    }, [])



  return (
      
    <div>
<h1>Obras de Artes</h1>
<br></br>
<br></br>
        <Table>
            
  <thead>
    <tr>
      <th>#</th>
      <th>Titulo</th>
      <th>Autor</th>
      <th>Catégoria</th>
      </tr>
      </thead>
      </Table>






              {artes.map(item => (
              
                  <tbody>
             <tr>
                 <td>1</td>
              <td>{item.title}</td>
              <td>{item.artists}</td>
              <td>{item.category}</td>
              
        </tr>
           

                
        <Link className="btn btn-danger" to={"/artes/" + item.id} >Ver Detalhes</Link>

        </tbody>
                
              
    
      ))}
            </div>
  )}
              

export default ArtesUm