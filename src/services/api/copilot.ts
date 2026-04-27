/**
 * GitHub Copilot management API helpers.
 */

import { apiClient } from './client';
import type { GitHubCopilotUsagePayload } from '@/types';

export const copilotApi = {
  getQuota: (authIndex: string): Promise<GitHubCopilotUsagePayload> =>
    apiClient.get<GitHubCopilotUsagePayload>('/copilot-quota', {
      params: { auth_index: authIndex },
    }),
};
