import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import {coursesFetchAll} from '../../redux/actions/course'
import './course.css'
import { useNavigate, Link, Navigate} from 'react-router-dom';

export default function Course() {

  const dispatch = useDispatch()
  const naviagte = useNavigate()

  useEffect(() => {
    dispatch(coursesFetchAll())
  },[])
  
  const handelCourse = () => {
    naviagte('/courseview')
  }

  const courses = useSelector((state) => state?.courses?.result)
  console.log(courses);
  
  if(!courses){
    return(<CircularProgress />)
  }else{
  return (
    <div className = 'courses'>
    {courses?.map((dataItem) => 
      <>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={dataItem.course_img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {dataItem.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {dataItem.description.substring(0, 100)}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small" onClick = {() => {
          localStorage.setItem('courseView', dataItem.course_id)
           naviagte('/courseview')}}>
           Learn More
           </Button>
        
      </CardActions>
    </Card>
    </>
    )}
    </div>
  )
  }   
}
