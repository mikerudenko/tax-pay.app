import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useAdminDocumentsStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: 'relative',
      margin: '0 auto',
    },
    controls: {
      marginBottom: theme.spacing(2),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  }),
);
