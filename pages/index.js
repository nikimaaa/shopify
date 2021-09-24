import React, {useCallback, useEffect, useState} from "react";
import {
  Page,
  ResourceList,
  ResourceItem,
  TextStyle,
  Card,
  TextContainer,
  Heading,
  Button,
  ButtonGroup
} from '@shopify/polaris'
import gql from 'graphql-tag'
import {Query, useQuery} from 'react-apollo';

const GET_PRODUCTS = gql`
{
  products(first: 20){
      edges{
        node{
          id
          title
          description
          tags
          images(first: 1){
            edges{
              node{
                originalSrc
                altText
              }
            }
          }
        }
      }
    }
  }
`;

const Index = () => {
  const [selection, setSelection] = useState([])

  const {loading, error, data} = useQuery(GET_PRODUCTS)
  console.log(loading, error, data);


  const renderItem = useCallback(
    (item) => {
      const {id, title, description} = item.node

      return (
        <ResourceItem
          id={id}
          name={title}
        >
          <TextContainer>
            <Heading>
              {title}
            </Heading>
            <p>{description}</p>
          </TextContainer>
        </ResourceItem>
      )
    },
    []
  );

  return (
    <Page>
        {/*if (loading) return <div>Loading...</div>*/}
        {/*if (error) return <div>error</div>*/}
        {/*return (*/}
        {/*  <Card>*/}
        {/*    <ResourceList*/}
        {/*      items={data.products.edges}*/}
        {/*      selectedItems={selection}*/}
        {/*      onSelectionChange={setSelection}*/}
        {/*      selectable*/}
        {/*      resourceName={{singular: 'product', plural: 'products'}}*/}
        {/*      renderItem={renderItem}*/}
        {/*      idForItem={(item) => item.node.id}*/}
        {/*    />*/}
        {/*  </Card>*/}
        {/*)*/}
      123
      <Card title='Actions' sectioned>
        <Button style={{color: '#bf0711'}}>Delete</Button>
      </Card>
    </Page>
  )
};

export default Index;
