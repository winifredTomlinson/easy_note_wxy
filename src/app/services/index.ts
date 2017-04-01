// All services import 
import { NoteAjax } from './NoteAjax';
import { NoteStorage } from './NoteStorage';
import { NoteAuth } from './NoteAuth';
import { NoteUtil } from './NoteUtil';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard';
// All services export 
export {
    NoteAjax,
    NoteAuth,
    NoteStorage,
    NoteUtil,
    AuthService,
    AuthGuard
};

// Export all services
export const CORE_SERVICES = [
    NoteAjax,
    NoteAuth,
    NoteStorage,
    NoteUtil,
    AuthService,
    AuthGuard
];
