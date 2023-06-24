import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #eef4f7;
  padding: 20px 50px;
`
export const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: #334155;
  font-weight: 500;
  text-align: center;
  margin-bottom: 5px;
  margin-top: 0px;
`
export const Line = styled.hr`
  border: 1.5px solid #52bbf0;
  width: 150px;
`

export const LoadingContainer = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const PackagesContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`
export const PackageItem = styled.li`
  list-style-type: none;
  background-color: #ffffff;
  width: 47%;
  margin-right: 30px;
  margin-bottom: 30px;
  padding-bottom: 20px;
`
export const Image = styled.img`
  width: 100%;
`

export const PackageName = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: #334155;
  padding-left: 15px;
`
export const PackageDescription = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;
  padding-left: 15px;
  padding-right: 15px;
`
