import { IconDeviceFloppy, IconEye } from "@tabler/icons-react";
import React from "react";

export default function ProfileFormLoading() {
	return (
		<>
			<div className="mt-8">
				<div className="flex items-baseline justify-between">
					<span className="h-7 w-52 animate-pulse rounded bg-neutral"></span>
					<span className="h-5 w-40 animate-pulse rounded bg-neutral text-sm"></span>
				</div>
				<div className="mt-4 flex items-end gap-4">
					<div>
						<div className="avatar pt-2">
							<div className="h-32 w-32 animate-pulse rounded-full bg-neutral"></div>
						</div>
					</div>
					<div className="w-full">
						<div className="form-control w-full">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<div className="h-12 w-full animate-pulse rounded bg-neutral"></div>
							<label className="label">
								<span className="label-text">Profilbild</span>
							</label>
							<div className="flex gap-4">
								<div className="h-12 w-full animate-pulse rounded bg-neutral"></div>

								<button
									className="btn"
									type="button"
									disabled={true}
								>
									<IconEye />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-8 flex w-full justify-end">
					<button
						className="btn-primary btn flex gap-2"
						type="submit"
						disabled={true}
					>
						<IconDeviceFloppy /> speichern
					</button>
				</div>
			</div>
		</>
	);
}
