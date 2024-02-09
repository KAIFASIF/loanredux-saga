export interface loanState {
    user: any;
    loan: {
      data: any[];
      isLoading: boolean;
      successMessage: string | null;
      errorMessage: string | null;
    };
  }