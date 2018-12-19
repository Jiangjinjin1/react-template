import { connect } from 'react-redux';

export function myConnect(
  mapStateToProps: any,
  mapDispatchToProps: any,
  mergeProps?: any,
  options?: any
): any {
  return (target: any) => connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(target);
}

export default {}