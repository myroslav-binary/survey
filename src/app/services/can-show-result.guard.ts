import { inject } from "@angular/core";
import { QuestionsService } from "./questions.service";
import { Router } from "@angular/router";

export const canShowResultGuard = () => {
  const service = inject(QuestionsService);
  const router = inject(Router);

  if(service.hasValue()){
    return true;
  };

  return router.parseUrl('/survey');
};
