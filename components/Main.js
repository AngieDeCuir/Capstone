export default state => html`
  ${views[state.view](state)}
`;
