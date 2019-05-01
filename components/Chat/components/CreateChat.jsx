import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Query } from 'react-apollo';

import { Loader } from '~/components/shared/';
import { Profile } from '~/lib/graphql';
import CreateChatHeadAppBar from './CreateChatHeadAppBar';
import CreateChatMemberList from './CreateChatMemberList';
import InputChatDescription from './InputChatDescription';
import SecContext from '~/context/secContext';

const StyledCreateChat = styled.div`
  && {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;

export default class CreateChat extends React.PureComponent {
  static contextType = SecContext;

  state = {
    stepNumber: 0,
    selectedMembers: [],
  };

  handleEditMembers = member => {
    const { selectedMembers } = this.state;
    const exist = selectedMembers.filter(elem => elem === member).length > 0;
    const newSelectedMembers = exist
      ? selectedMembers.filter(elem => elem !== member)
      : [...selectedMembers, member];
    this.setState({ selectedMembers: newSelectedMembers });
  };

  handleNextStep = () => {
    this.setState(({ stepNumber }) => ({ stepNumber: stepNumber + 1 }));
  };

  render() {
    const { user } = this.context;

    const { stepNumber, selectedMembers } = this.state;

    return (
      <Query query={Profile.Queries.GET_FOLLOWERS} variables={{ username: user.username }}>
        {({ data, loading, error }) => {
          if (loading) return <Loader />;
          if (error) return <div>Hubo un error</div>; // @todo better error
          if (
            !data ||
            !data.profile ||
            !data.profile.user ||
            data.profile.user.followers.length === 0
          ) {
            return <div>El usuario no tiene seguidores</div>; // @todo better message
          }
          return (
            <StyledCreateChat>
              <CreateChatHeadAppBar stepNumber={stepNumber} onNext={this.handleNextStep} />
              {stepNumber === 0 && (
                <CreateChatMemberList
                  elements={data.profile.user.followers}
                  selectedMembers={selectedMembers}
                  handleEditMembers={this.handleEditMembers}
                />
              )}
              {stepNumber === 1 && <InputChatDescription selectedMembers={selectedMembers} />}
            </StyledCreateChat>
          );
        }}
      </Query>
    );
  }
}
